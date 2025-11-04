import { ShieldBan, Star, Search, Smartphone, Lock, User } from "lucide-react";

export default function Holder() {
  const features = [
    {
      title: "User-Friendly Interface",
      description:
        "Navigate effortlessly with our intuitive design, optimised for all devices. Enjoy a seamless experience whether you're on a computer or mobile.",
      icon: User,
      icon_color: "#5C5C5C",
      header_color: "#fff",
      description_color: "#bbbbbbff",
    },
    {
      title: "Secure Checkout",
      description:
        "Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.",
      icon: ShieldBan,
      icon_color: "#5CB85C",
      header_color: "#fff",
      description_color: "#bbbbbbff",
    },
    {
      title: "Advanced Search",
      description:
        "Find products quickly with advanced filters, sorting options, and suggestions. Save time and effortlessly locate exactly what you need with ease.",
      icon: Search,
      icon_color: "#F0AD4E",
      header_color: "#fff",
      description_color: "#bbbbbbff",
    },
    {
      title: "Customer Reviews and Ratings",
      description:
        "Make informed decisions with detailed product reviews and ratings from other buyers. Trust the experiences of fellow shoppers to guide choices.",
      icon: Star,
      icon_color: "#D9534F",
      header_color: "#fff",
      description_color: "#bbbbbbff",
    },
    {
      title: "Mobile App Integration",
      description:
        "Enhance your shopping experience with our mobile app and push notifications. Stay updated on arrivals and exclusive offers directly on phone.",
      icon: Smartphone,
      icon_color: "#5BC0DE",
      header_color: "#fff",
      description_color: "#bbbbbbff",
    },
    {
      title: "Security Features",
      description:
        "Protect your data with fraud detection and two-factor authentication. Ensure a secure environment for all transactions and account activities.",
      icon: Lock,
      icon_color: "#5C5C5C",
      header_color: "#fff",
      description_color: "#bbbbbbff",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
      {features.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="flex flex-col justify-center gap-3 min-w-[280px] h-[240px] bg-[#242424] rounded-xl p-6"
            style={{ border: `2px solid ${item.icon_color}` }}
          >
            <Icon
              className="w-12 h-12 p-1 rounded-sm"
              style={{
                color: item.icon_color,
                backgroundColor: `${item.icon_color}22`,
              }}
            />
            <h2
              className="font-bold text-2xl"
              style={{ color: item.header_color }}
            >
              {item.title}
            </h2>
            <p
              className="font-thin"
              style={{ color: item.description_color }}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
