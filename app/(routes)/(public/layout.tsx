import { REACT_CHILDREN_TYPE } from "@/common/types";

export default function PublicLayout({
  children,
}: Readonly<REACT_CHILDREN_TYPE>) {
  return (
    <div>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </div>
  );
}
