"use client";
import { useState } from "react";

interface ReadMoreProps {
  description: string;
}

const ReadMore = ({ description }: ReadMoreProps) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="mr-16 text-muted-foreground md:ml-auto">
      {readMore ? description : `${description.substring(0, 200)} ...`}
      <button
        className="text-green-500 cursor-pointer ml-2"
        onClick={() => setReadMore(!readMore)}>
        {readMore ? "...show less" : "show more"}
      </button>
    </div>
  );
};
export default ReadMore;
