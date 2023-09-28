import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  id: string;
  image: string;
  name: string;
  username: string;
  bio: string;
  members: {
    image: string;
  }[];
}

const CommunityCard = ({ id, image, name, username, bio, members }: Props) => {
  return (
    <article className="community-card">
      {/* Image and user info*/}
      <div className="flex flex-wrap gap-3">
        <Link href={`/communities/${id}`} className="relative w-12 h-12">
          <Image
            src={image}
            alt="Community Logo"
            fill
            className="rounded-full object-cover"
          />
        </Link>
        <div className="flex flex-col">
          <p className="text-base-semibold text-light-1">{name}</p>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-2 text-subtle-medium text-gray-1">{bio}</p>

      {/*Button*/}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <Link href={`/communities/${id}`}>
          <Button size="sm" className="community-card_btn">
            View
          </Button>
        </Link>

        {/*members*/}
        {members.length > 0 && (
          <div className="flex items-center">
            {members.map((member, index) => (
              <Image
                key={index}
                src={member.image}
                alt={`user_${index}`}
                width={28}
                height={28}
                className={`${
                  index !== 0 && "-ml-2"
                } rounded-full object-cover`}
              />
            ))}
            {members.length > 3 && (
              <p className="ml-1 text-subtle-medium text-gray-1">
                {members.length}+ Users
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default CommunityCard;
