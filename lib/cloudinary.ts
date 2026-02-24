import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export default cloudinary;

//////////////////////////////////////////////////////////////
// Upload Image
//////////////////////////////////////////////////////////////

export const uploadImage = async (file: File) => {
  if (!file) throw new Error("No file provided");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const timestamp = Date.now();
  const fileName = `${timestamp}-${file.name}`;

  const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "products",
          public_id: fileName,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      )
      .end(buffer);
  });

  if (!result?.secure_url) {
    throw new Error("Image upload failed");
  }

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};

//////////////////////////////////////////////////////////////
// Delete Image
//////////////////////////////////////////////////////////////

export const deleteImage = async (publicId: string) => {
  if (!publicId) throw new Error("Invalid public_id");

  const result = await cloudinary.uploader.destroy(publicId);

  if (result.result !== "ok" && result.result !== "not found") {
    throw new Error("Image deletion failed");
  }

  return result;
};
