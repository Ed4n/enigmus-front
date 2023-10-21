import Button from "@/components/Button";
import { InputText } from "./../components/InputText";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleStart = () => {
    router.push("/game");
  };

  return (
    <div>
      <MainLayout>
        <InputText placeholder="Carnet" func={handleChange} />
        <InputText placeholder="Nombre" func={handleChange} />
        <Button func={handleStart}>Start</Button>
      </MainLayout>
    </div>
  );
}
