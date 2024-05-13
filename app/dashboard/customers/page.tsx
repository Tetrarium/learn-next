import Link from "next/link";

export default function () {
  return (
    <div>
      <Link href={'./'}>Top</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      <p>Customers</p>
    </div>
  );
}