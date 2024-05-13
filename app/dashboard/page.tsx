import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href='/'>Back</Link>
      <Link href={'/dashboard/customers'}>Customers</Link>
      <Link href={'/dashboard/invoices'}>Invoices</Link>
      <p>Dashboard</p>
    </div>
  );
}