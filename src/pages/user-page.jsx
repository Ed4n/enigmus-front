import Button from "@/components/Button";
import { InputText } from "../components/InputText";
import MainLayout from "@/layouts/MainLayout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/useLocalStorage.js";

export default function userPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    carnet: "",
    name: "",
  });

  useEffect(() => {
    if (router.pathname === "/user-page") {
      localStorage.removeItem("user");
      console.log(localStorage.getItem("user"));
    }
  }, [router.pathname]);

  const handleStart = (e) => {
    if (e.key === "Enter") {
      alert("Enter");
    }

    if (user.carnet === "" || user.name === "") {
      alert("Llena los campos");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
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
