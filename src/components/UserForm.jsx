import Button from "@/components/Button";
import { InputText } from "../components/InputText";
import MainLayout from "@/layouts/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext, UserProvider } from "@/context/UserContext";

export default function UserForm() {
  const router = useRouter();
  const { user, setUser, setUserToLocalStorage, removeUserFromLocalStorage } =
    useContext(UserContext);

  useEffect(() => {
    if (router.pathname === "/user-page") {
      removeUserFromLocalStorage(user);
      console.log(localStorage.getItem("user"));
    }
  }, []);

  // HANDLERS //
  const handleStart = (e) => {
    if (user.carnet === "" || user.name === "") {
      alert("Llena los campos");
    } else {
      setUserToLocalStorage(user);
      router.push("/game");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <MainLayout>
        <InputText name="carnet" placeholder="Carnet" func={handleChange} />
        <InputText name="name" placeholder="Nombre" func={handleChange} />
        <Button func={handleStart}>Start</Button>
      </MainLayout>
    </div>
  );
}
