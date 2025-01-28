import axios from "axios";
import config from "../config";
console.log(config.API_BASE_URL);
const apiClient = axios.create({
  baseURL: config.API_BASE_URL,
});

export async function getSignedUrl({ key, content_type }) {
  const response = await apiClient.post("/s3/signed_url", {
    key,
    content_type,
  });

  return response.data;
}

export async function uploadFileToSignedUrl(
  signed_url,
  file,
  contentType,
  onProgress,
  onComplete
) {
  axios
    .put(signed_url, file, {
      onUploadProgress: onProgress,
      headers: {
        "Content-Type": contentType,
      },
    })
    .then((response) => {
      onComplete(response);
    });
}
