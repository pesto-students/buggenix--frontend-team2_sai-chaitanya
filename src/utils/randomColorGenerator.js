export const randomColorGenerator = () => {
    const random = Math.floor(Math.random() * 10);
    const randomColors = ["f56a00", "87d068", "1890ff", "f56a00", "87d068", "1890ff", "f56a00", "87d068", "1890ff", "f56a00", "87d068"];
    return randomColors[random];
}
