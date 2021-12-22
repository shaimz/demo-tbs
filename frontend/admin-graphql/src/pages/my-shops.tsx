import OwnerDashboard from "@components/dashboard/owner";
import AdminLayout from "@components/layouts/admin";
import { adminOnly } from "@utils/auth-utils";
import { GetStaticProps } from "next";



const MyShopsPage = () => {
  return <OwnerDashboard />;
};

MyShopsPage.authenticate = {
  permissions: adminOnly,
};
MyShopsPage.Layout = AdminLayout;
export default MyShopsPage;
