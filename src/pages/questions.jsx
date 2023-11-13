import QuestionsList from "@/components/questions/QuestionsList";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

export default function questions() {
  return (
    <MainLayout>
      <h2 className=" text-2xl font-bold text-sphinx-yellow-800">Preguntas</h2>

      <QuestionsList />
    </MainLayout>
  );
}
