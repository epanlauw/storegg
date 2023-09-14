type StepItemType = "step1" | "step2" | "step3";

const StepItem: {
  icon: StepItemType;
  title: string;
  desc1: string;
  desc2: string;
}[] = [
  {
    icon: "step1",
    title: "1. Start",
    desc1: "Pilih salah satu game",
    desc2: "yang ingin kamu top up"
  },
  {
    icon: "step2",
    title: "2. Fill Up",
    desc1: "Top up sesuai dengan",
    desc2: "nominal yang sudah tersedia"
  },
  {
    icon: "step3",
    title: "3. Be a Winner",
    desc1: "Siap digunakan untuk",
    desc2: "improve permainan kamu"
  }
];

export default StepItem;
