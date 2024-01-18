import {base64Generator} from "./base64";
import axios from "axios";

export const postImages = async (selector, placeholder, image) => {
    const formData = new FormData();
    let galleries = [];
    if (image.length > 1) {
        for (const el of image) {
            const base64 = await base64Generator(el);
            formData.append("image", String(base64));
            axios.post('https://api.amcham.uz/file/add', formData, {
                headers: {
                    "api-token": "iet378aopRlshw728191"
                }
            })
                .then((res) => {
                    galleries.push(res.data.data.data);
                    let images = `Images {count}`
                    document.querySelector("#gallery_images_holder").value = images.replace("{count}", galleries.length);

                })
                .catch(err => console.log(err));

        }

    } else {
        const base64 = await base64Generator(image[0]);
        formData.append("image", String(base64));
        axios.post('https://api.amcham.uz/file/add', formData, {
            headers: {
                "api-token": "iet378aopRlshw728191"
            }
        })
            .then(res => {
                document.querySelector(`#${selector}`).value = res.data.data.data;
                document.querySelector(`#${placeholder}`).src = res.data.data.data;
            })
            .catch(err => console.log(err));
    }
};

