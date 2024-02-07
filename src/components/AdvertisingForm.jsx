"use client";
import { useGetCategory } from "@/hooks/useCategories";
import { useCreateProducts, useUpdateProducts } from "@/hooks/useProducts";
import Loading from "@/ui/Loading";
import SelectField from "@/ui/SelectField";
import TextField from "@/ui/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { useGetUser } from "@/hooks/useUser";

const AdvertisingForm = ({ onClose, advToEdit = {} }) => {
  const { _id: advId } = advToEdit;
  const { user } = useGetUser();
  const {
    price,
    city,
    brand,
    category,
    title,
    description,
    imageLink,
    slug,
    userCreated,
    tags: prevTags,
  } = advToEdit;
  const isAdvSession = Boolean(advId);
  let editValues = {};

  if (isAdvSession) {
    editValues = {
      price,
      city,
      brand,
      category,
      title,
      description,
      imageLink,
      prevTags,
      slug,
      userCreated,
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });
  const { addAdvertising, isCreating } = useCreateProducts();
  const { isUpdating, updateAdvertising } = useUpdateProducts();
  const { categories } = useGetCategory();
  const [tags, setTags] = useState(prevTags || []);

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      tags,
      slug: String(Math.random()),
      userCreated: user?._id,
    };

    if (isAdvSession) {
      await updateAdvertising(
        {
          productId: advId,
          data: newData,
        },
        {
          onSuccess: () => onClose(),
        }
      );
    } else {
      await addAdvertising(newData, {
        onSuccess: () => onClose(),
      });
    }
  };

  return (
    <form
      className="space-y-3 mt-3 overflow-y-auto h-[300px] scroll"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        register={register}
        errors={errors}
        name="title"
        required
        placeHolder="مثال :  پراید مدل 83"
        validationSchema={{
          required: "نام آگهی ضرروی است",
        }}
        label={"نام آگهی "}
      />
      <TextField
        label={"توضیحات"}
        name="description"
        errors={errors}
        placeHolder={"توضیحاتی درباره آگهی بنویسید"}
        required
        register={register}
        validationSchema={{
          required: "توضیحات ضرروی است",
          minLength: {
            value: 10,
            message: " توضیحات کوتاه است",
          },
        }}
      />
      <TextField
        label={"قیمت"}
        name="price"
        errors={errors}
        placeHolder={"مثال : 10000"}
        required
        register={register}
        validationSchema={{
          required: "قیمت ضرروی است",
        }}
      />
      <TextField
        label={"شهر"}
        name="city"
        errors={errors}
        placeHolder={"مثال : تهران"}
        required
        register={register}
        validationSchema={{
          required: "شهر ضرروی است",
        }}
      />
      <TextField
        label={"برند"}
        name="brand"
        errors={errors}
        placeHolder={"مثال : سایپا"}
        required
        register={register}
        validationSchema={{
          required: "برند ضرروی است",
        }}
      />
      <TextField
        label={"عکس آگهی"}
        name="imageLink"
        errors={errors}
        required
        register={register}
        validationSchema={{
          required: "عکس آگهی ضرروی است",
        }}
      />
      <div>
        <label className="mb-2 block text-right" htmlFor="tags">
          تگ آگهی
        </label>
        <TagsInput id="tags" value={tags} onChange={setTags} name="tags" />
      </div>
      <SelectField
        errors={errors}
        name="category"
        required
        options={categories}
        register={register}
        label="دسته بندی"
        validationSchema={{
          required: " دسته بندی ضرروی است",
        }}
      />
      {isAdvSession ? (
        <button className="mt-2 btn btn-primary btn-active w-full text-lg h-[45px] text-white">
          {isUpdating ? <Loading /> : "ویرایش آگهی "}
        </button>
      ) : (
        <button className="mt-2 btn bg-red-600 btn-active w-full text-lg h-[45px] text-white">
          {isCreating ? <Loading /> : "ثبت آگهی "}
        </button>
      )}
    </form>
  );
};

export default AdvertisingForm;
