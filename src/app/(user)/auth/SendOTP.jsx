import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";

const SendOTP = ({ errors, register, onSubmit, loading }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h4 className="text-xl text-right text-rose-700">ورورد / ثبت نام</h4>
      <div>
        <TextField
          label={"شماره موبایل"}
          name={"phoneNumber"}
          placeHolder="شماره موبایل خود را وارد کنید"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "شماره موبایل ضرروی است",
            minLength: {
              value: 11,
              message: "شماره موبایل اشتباه است",
            },
          }}
        />
      </div>
      <button className="mt-2 btn bg-red-600 btn-active w-full text-lg h-[45px] text-white">
        {loading ? <Loading /> : "ارسال کد"}
      </button>
    </form>
  );
};

export default SendOTP;
