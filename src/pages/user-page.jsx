import Button from "@/components/Button";
import { InputText } from "../components/InputText";
import MainLayout from "@/layouts/MainLayout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserProvider } from "@/context/UserContext";
import UserForm from "@/components/UserForm";

export default function userPage() {
  return (
    <div>
      <UserProvider>
        <UserForm />
      </UserProvider>
    </div>
  );
}
