export default function convertHourToMinutes(time: string) {
  /** 8:00 recebo o horário nesse formato.
   * Faço a desestruturação dessa hora separando pelo :
   * na primeira posição, eu terei 8, na segunda 0.
   * Como é uma string, o map transforma no tipo Number.
   */
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
};