import { categoryTypes } from "@/constants/categoryTypes";
import { useCreateCategory, useUpdateCategory } from "@/hooks/useCategories";
import Loading from "@/ui/Loading";
import SelectField from "@/ui/SelectField";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";

const CategoryForm = ({ onClose, categoryToEdit = {} }) => {
  const { _id: categoryId } = categoryToEdit;
  const { englishTitle, title, description, type } = categoryToEdit;
  const isCategorySession = Boolean(categoryId);
  let editValues = {};

  if (isCategorySession) {
    editValues = {
      englishTitle,
      title,
      description,
      type,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });
  const { isPending, addCategories } = useCreateCategory();
  const { isUpdating, updateCategories } = useUpdateCategory();
  
  const onSubmit = async (data) => {
    if (isCategorySession) {
      await updateCategories(
        {
          id: categoryId,
          newData:{
            ...data
          }
        },
        {
          onSuccess: () => onClose(),
        }
      );
    } else {
      await addCategories(data, {
        onSuccess: () => onClose(),
      });
    }
  };

  return (
    <form className="space-y-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        errors={errors}
        name="title"
        required
        placeHolder="مثال : برنامه نویسی"
        validationSchema={{
          required: "نام دسته بندی ضرروی است",
        }}
        label={"نام دسته بندی"}
      />
      <TextField
        label={"توضیحات"}
        name="description"
        errors={errors}
        placeHolder={"توضیحاتی درباره پروژه بنویسید"}
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
        label={"عنوان انگلیسی"}
        name="englishTitle"
        errors={errors}
        placeHolder={"مثال : design"}
        required
        register={register}
        validationSchema={{
          required: "عنوان انگلیسی ضرروی است",
        }}
      />
      <SelectField
        options={categoryTypes}
        errors={errors}
        name="type"
        required
        register={register}
        label="نوع دسته بندی"
        validationSchema={{
          required: "نوع دسته بندی ضرروی است",
        }}
      />
      {isCategorySession ? (
        <button className="mt-2 btn btn-primary btn-active w-full text-lg h-[45px] text-white">
          {isUpdating ? <Loading /> : "ویرایش دسته بندی"}
        </button>
      ) : (
        <button className="mt-2 btn bg-red-600 btn-active w-full text-lg h-[45px] text-white">
          {isPending ? <Loading /> : "ثبت دسته بندی"}
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
