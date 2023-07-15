"use client";
import React, { useState } from "react";
import RegisterSchema from "@/utils/validation/RegisterValidator";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { onClose } from "@/redux/hooks/useRegisterSlice";

const useRegisterFormik = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema(),
    onSubmit: async (values) => {
      console.log("values", values);
      setIsLoading(true);
      axios
        .post("/api/register", values)
        .then((data) => {
          console.log("data", data);
          if (data.data.status === "ok") {
            toast.success("register successfully");
          } else if (data.data.status === "error") {
            data.data.errors.length > 0 &&
              data.data.errors.map((e: { message: string }) => {
                toast.error(e.message);
              });
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          setIsLoading(false);
          dispatch(onClose());
        });
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return { errors, isLoading, values, handleChange, handleSubmit };
};

export default useRegisterFormik;
