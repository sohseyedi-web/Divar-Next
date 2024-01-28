"use client";
import { getOtp } from "@/services/authServices";
import { useState} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import CheckOTP from "./CheckOTP";
import CompleteProfile from "./CompleteProfile";
import SendOTP from "./SendOTP";

const AuthContainer = () => {
  const [step, setStep] = useState(2);
  const { mutateAsync, isPending } = useMutation({ mutationFn: getOtp });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const sendOTPHandler = async () => {
    try {
      const { message } = await mutateAsync({ phoneNumber: "09331559119" });
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTP
            onSubmit={handleSubmit(sendOTPHandler)}
            loading={isPending}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTP
            onResend={sendOTPHandler}
            phoneNumber={"09331559119"}
            setStep={setStep}
          />
        );
      case 3:
        return <CompleteProfile />;
    }
  };
  return <div className="w-full py-2">{renderStep()}</div>;
};

export default AuthContainer;
