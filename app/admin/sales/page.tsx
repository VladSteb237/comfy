// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { fetchAdminOrders } from "@/lib/actions";
// import { formatCurrency, formatDate } from "@/lib/format";

// const SalesPage = async () => {
//   const orders = await fetchAdminOrders();

//   return (
//     <div>
//       <Table>
//         <TableCaption>Total orders : {orders.length}</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Email</TableHead>
//             <TableHead>Products</TableHead>
//             <TableHead>Order Total</TableHead>
//             <TableHead>Tax</TableHead>
//             <TableHead>Shipping</TableHead>
//             <TableHead>Date</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {orders.map((order) => {
//             const {
//               id,
//               products,
//               orderTotal,
//               tax,
//               shipping,
//               createdAt,
//               email,
//             } = order;

//             return (
//               <TableRow key={id}>
//                 <TableCell>{email}</TableCell>
//                 <TableCell>{products}</TableCell>
//                 <TableCell>{formatCurrency(orderTotal)}</TableCell>
//                 <TableCell>{formatCurrency(tax)}</TableCell>
//                 <TableCell>{formatCurrency(shipping)}</TableCell>
//                 <TableCell>{formatDate(createdAt)}</TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default SalesPage;
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAdminOrders, OrderType } from "@/lib/actions";
import { formatCurrency, formatDate } from "@/lib/format";

export default async function DashboardPage() {
  const { userId } = await auth();
  const orders: OrderType[] = await fetchAdminOrders();

  // Server-side redirect если не админ
  if (!userId || userId !== process.env.ADMIN_USER_ID) {
    return redirect("/");
  }

  return (
    <div>
      <Table>
        <TableCaption>Total orders : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const {
              id,
              products,
              orderTotal,
              tax,
              shipping,
              createdAt,
              email,
            } = order;

            return (
              <TableRow key={id}>
                <TableCell>{email}</TableCell>
                <TableCell>{products}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(shipping)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
