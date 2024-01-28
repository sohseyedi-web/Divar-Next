import { useMutation } from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import { completeProfile } from '@/services/authServices';
import { useRouter } from "next/navigation";
import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";
import { toast } from "react-hot-toast";

const CompleteProfile = () => {
  const {mutateAsync,isPending} = useMutation({mutationFn : completeProfile})
  const {formState : {errors} , register , handleSubmit} = useForm();
  const router = useRouter()

  const completedProfileHandler = async(data) => {
    try {
      const {user,message} = await mutateAsync(data)
      toast.success(message);
      if (user.status !== 2) {
        router.push("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "USER") return router.push("/");
      if (user.role === "ADMIN") return router.push("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(completedProfileHandler)}
    >
      <TextField
        label={"نام کاربری"}
        name="name"
        register={register}
        required
        validationSchema={{
          required: "نام کاربری ضرروی است",
        }}
        errors={errors}
      />
      <TextField
        label={"ایمیل"}
        name="email"
        register={register}
        required
        validationSchema={{
          required: "ایمیل کاربری ضرروی است",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "ایمیل نا معتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label={"نام شهر"}
        name="city"
        register={register}
        required
        validationSchema={{
          required: "نام شهر ضرروی است",
        }}
        errors={errors}
      />
      <button className="mt-2 btn bg-red-600 btn-active w-full text-lg h-[45px] text-white">
        {isPending ? <Loading /> : "ثبت اطلاعات"}
      </button>
    </form>
  );
};

export default CompleteProfile;
