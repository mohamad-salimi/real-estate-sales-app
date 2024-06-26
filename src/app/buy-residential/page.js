import BuyResidentialPage from "@/template/buyResidentialPage/BuyResidentialPage";
import React from "react";

const BuyResidential = async ({ searchParams }) => {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است.</h3>;
  let finalData = data?.data;
  if (searchParams?.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResidential;
