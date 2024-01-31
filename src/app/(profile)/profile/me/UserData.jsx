"use client";

import { useGetUser, useUpdateUser } from "@/hooks/useUser";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";

const UserData = () => {
  let userDetails = {};
  const { user, isLoading } = useGetUser();
  const { updateUserProfile, isUpdating } = useUpdateUser();
  userDetails = {
    city: user?.city,
    name: user?.name,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    biography: user?.biography,
  };
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: userDetails,
  });

  const onSubmit = async (data) => {
    await updateUserProfile(data);
  };

  if (isLoading && user) return <Loading />;

  return (
    <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"نام کاربری"}
          name={"name"}
          errors={errors}
          register={register}
          required
          validationSchema={{
            required: "نام کاربری ضرروی است",
          }}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"ایمیل"}
          name={"email"}
          errors={errors}
          register={register}
          required
          validationSchema={{
            required: "ایمیل ضرروی است",
          }}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"شماره موبایل"}
          name={"phoneNumber"}
          errors={errors}
          register={register}
          required
          validationSchema={{
            required: "شماره موبایل  ضرروی است",
          }}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"شهر"}
          name={"city"}
          errors={errors}
          register={register}
        />
      </div>
      <div className="lg:w-[40%] w-full">
        <TextField
          label={"اطلاعات بیشتر"}
          name={"biography"}
          errors={errors}
          register={register}
          placeholder={"اطلاعات بیشتری از خودت بنویس"}
        />
      </div>
      <button className="btn btn-active btn-primary lg:w-[40%] w-full text-lg h-[45px] text-white">
        {isUpdating ? <Loading /> : "ویرایش اطلاعات"}
      </button>
    </form>
  );
};

export default UserData;
