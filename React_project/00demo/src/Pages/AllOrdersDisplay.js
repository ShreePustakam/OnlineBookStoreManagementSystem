import AdminOrderPage from "../Components/AllOrders";

function AllOrdersDisplay() {

   return (
      <>
         <AdminOrderPage/> 
         <p style={{ marginLeft: 300 }}><a href="/adminprofile" style={{ color: "#D14D72" }}>&lt; Back</a></p>
      </>
   )
}

export default AllOrdersDisplay;