import Button from "@/components/Button";
import { InputText } from "./../components/InputText";
import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/useLocalStorage";

const useAlert = (initalValue, alertName) => {
  const Alert = () => alert(alertName);
  return [Alert];
};

export default function User() {
  const router = useRouter();
  const [Alert] = useAlert(10, "Hose");

  const [user, setUser] = useState({
    carnet: "",
    name: "",
  });

  const handleStart = () => {
    if (user.carnet === "" || user.name === "") {
      alert("Llena los campos");
    } else {
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
        <button onClick={Alert}>aaaaaaaaa</button>
      </MainLayout>
    </div>
  );
}
