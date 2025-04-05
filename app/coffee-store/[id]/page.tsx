import React from "react";
import Link from "next/link";

function Page({ params }: { params: { id: string } }) {
  return (
    <div className="h-full pb-80">
      {params.id}
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="mb-2 mt-24 text-lg font-bold">
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
