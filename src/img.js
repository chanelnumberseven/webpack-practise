export function addImage(src,width=100){
    let img=new Image();
    img.src=src;
    img.width=width;
    document.body.appendChild(img);
    return img;
}
export default addImage