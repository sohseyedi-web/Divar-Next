"use client";
import { checkOtp } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import OTPInput from "react-otp-input";

const CheckOTP = ({ phoneNumber, onResend, setStep }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(60);
  const { isPending, mutateAsync } = useMutation({ mutationFn: checkOtp });
  const router = useRouter();

  const checkOTPHandler = async () => {
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      console.log(user)
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 && setInterval(() => setTime((prevTime) => prevTime - 1), 1000);

    return () => {
      if (timer) return clearInterval(timer);
    };
  }, [time]);

  return (
    <form className="space-y-4" onSubmit={checkOTPHandler}>
      <div className="flex flex-col gap-y-3">
        <span>کد به شماره {phoneNumber} ارسال شده</span>
        <span
          onClick={() => setStep((s) => s - 1)}
          className="underline flex font-semibold cursor-pointer items-center text-red-600"
        >
          <RiIcon.RiEdit2Line size={22} />
          ویرایش؟
        </span>
      </div>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        inputStyle={{
          width: "11%",
          height: "45px",
          border: "1px solid #aaa",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
        }}
        containerStyle="flex flex-row-reverse justify-between"
        renderInput={(props) => <input type="number" {...props} />}
      />
      {time > 0 ? (
        <>
          <button className="btn bg-red-600 btn-active w-full text-lg h-[45px] text-white">
            {isPending ? "لطفا صبر کنید." : "ثبت کد"}
          </button>
          <p className="mt-2 text-center text-gray-800">
            {time} ثانیه تا ارسال مجدد کد
          </p>
        </>
      ) : (
        <button onClick={onResend} className="btn btn-primary btn-active w-full text-lg h-[45px] text-white">
          ارسال مجدد کد؟
        </button>
      )}
    </form>
  );
};

export default CheckOTP;
