"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CategoriesTable from "./categories";
import ProductsTable from "./products";
import Analytics from "./analytics";
import ProtectedRoute from "../comoinents/ProtectedRoute";
import { fetchWithToken } from "../lib/api";

export default function DashboardPageWrapper() {
  const router = useRouter();
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  const fetchCategories = () => {
    fetchWithToken("/categories").then(setCategories).catch(console.error);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
    fetchCategories();
  }, [router]);

  return (
    <ProtectedRoute>
      <main style={{ padding: 40 }}>
        <h1 style={{ marginBottom: 20 }}>Админка</h1>
        <div style={{ display: "flex", gap: "20px", marginBottom: 40 }}>
          <div style={{ flex: 1 }}>
            <div className="card">
              <CategoriesTable
                categories={categories}
                onCategoriesUpdated={fetchCategories}
              />
            </div>
          </div>

          <div style={{ width: 500 }}>
            <div className="card">
              <Analytics />
            </div>
          </div>
        </div>

        <div className="card">
          <ProductsTable categories={categories} />
        </div>
      </main>
    </ProtectedRoute>
  );
}
