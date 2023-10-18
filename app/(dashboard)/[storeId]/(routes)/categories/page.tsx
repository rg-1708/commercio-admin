import prismadb from "@/lib/prismadb";

import { format } from "date-fns";
import { createElement } from "react";

import { CategoryClient } from "./components/client";
import { CategoryColumn } from "./components/columns";
import BillboardLabelWithImage from "./components/billboard-label-with-image";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabelAndImage: createElement(BillboardLabelWithImage, {
      billboard: item.billboard,
    }),
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
