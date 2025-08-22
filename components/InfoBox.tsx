import Link from "next/link";

export default function InfoBox({
  title,
  children,
  primary = true,
  buttonText,
  path,
}: {
  title: string;
  children: React.ReactNode;
  primary?: boolean;
  buttonText: string;
  path: string;
}) {
  return (
    <div
      className={`${
        primary ? "bg-gray-100" : "bg-blue-100"
      } p-6 rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={path}
        className={`${
          primary
            ? "bg-black hover:bg-gray-700"
            : "bg-blue-500 hover:bg-blue-600"
        } inline-block text-white rounded-lg px-4 py-2`}
      >
        {buttonText}
      </Link>
    </div>
  );
}
