import { DashboardLayout } from "@/layouts/dashboard.layout";

const Browse = () => {
  return (
    <div>
      <h1 className="text-xl">Browse</h1>
    </div>
  );
};

const BrowsePage = () => {
  return (
    <DashboardLayout>
      <Browse />
    </DashboardLayout>
  );
};

export default BrowsePage;
