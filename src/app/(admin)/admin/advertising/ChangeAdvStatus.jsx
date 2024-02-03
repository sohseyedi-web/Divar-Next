import { useChangeStatusProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import SelectField from "@/ui/SelectField";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const optionList = [
  {
    label: "رد شده",
    value: "CLOSED",
  },
  {
    label: "در انتظار انتشار",
    value: "WAITING",
  },
  {
    label: "انتشار",
    value: "OPEN",
  },
];

const ChangeAdvStatus = ({ onClose, advId }) => {
  const { changeProductStatus, isUpdating } = useChangeStatusProducts();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const queryClinet = useQueryClient();

  const onSubmit = async (data) => {
    await changeProductStatus(
      {
        id: advId,
        data,
      },
      {
        onSuccess: () => {
          onClose();
          queryClinet.invalidateQueries({ queryKey: ["get-adv", advId] });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <SelectField
        label={"تغییر وضعیت"}
        name="status"
        register={register}
        required
        options={optionList}
        errors={errors}
      />
      <button className="btn bg-red-700 text-lg h-[45px] text-white w-full">
        {isUpdating ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default ChangeAdvStatus;