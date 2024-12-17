import GitHubFS from "gh-fs";
import { config } from "dotenv";
config();

// Initialize GitHubFS instance
const githubFS = new GitHubFS({
  authToken: process.env.GITHUB_AUTH_TOKEN,
  owner: "manuelwestermeier",
  repo: "urlaubsplaner-data",
  defaultCommitter: {
    email: "westermeier111@gmail.com",
    name: "Manuel Westermeier",
  },
  encryptionKey: process.env.ENCRYPTION_KEY, // Use a strong, secure key
});

var reset = false;

export const journeys = !reset
  ? JSON.parse(await githubFS.readFile("journeys.data"))
  : {
      trip001: {
        title: "Bergwanderung im Harz",
        price: "249 €",
        location: "Harz, Deutschland",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Erleben Sie eine unvergessliche Wanderung durch die malerische Landschaft des Harzes.",
        author: { id: "author001", name: "Max Mustermann" },
        contactEmail: "max@example.com",
        contactPhone: "+491234567890",
        bookingTime: "2024-12-15",
      },
      trip002: {
        title: "Strandurlaub auf Mallorca",
        price: "799 €",
        location: "Mallorca, Spanien",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Genießen Sie den mediterranen Charme Mallorcas an einem wunderschönen Strand.",
        author: { id: "author002", name: "Erika Beispiel" },
        contactEmail: "erika@example.com",
        contactPhone: "+349112233445",
        bookingTime: "2024-12-20",
      },
      trip003: {
        title: "Safari in Kenia",
        price: "2.199 €",
        location: "Masai Mara, Kenia",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Entdecken Sie die wilde Natur Kenias und erleben Sie eine unvergessliche Safari.",
        author: { id: "author003", name: "John Doe" },
        contactEmail: "john@example.com",
        contactPhone: "+254712345678",
        bookingTime: "2024-12-25",
      },
      trip004: {
        title: "Städtetrip nach Paris",
        price: "599 €",
        location: "Paris, Frankreich",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Verbringen Sie ein Wochenende in der Stadt der Liebe, Paris, mit vielen Sehenswürdigkeiten.",
        author: { id: "author004", name: "Lena Müller" },
        contactEmail: "lena@example.com",
        contactPhone: "+33123456789",
        bookingTime: "2024-12-18",
      },
      trip005: {
        title: "Skifahren in den Alpen",
        price: "1.099 €",
        location: "Alpen, Österreich",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Erleben Sie Skifahren in den majestätischen Alpen und genießen Sie den Winterspaß.",
        author: { id: "author005", name: "Oliver Schmitt" },
        contactEmail: "oliver@example.com",
        contactPhone: "+435987654321",
        bookingTime: "2024-12-22",
      },
      trip006: {
        title: "Roadtrip durch Kalifornien",
        price: "3.499 €",
        location: "Kalifornien, USA",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Fahren Sie entlang der wunderschönen kalifornischen Küste und entdecken Sie die Highlights des Bundesstaates.",
        author: { id: "author006", name: "Sophia Becker" },
        contactEmail: "sophia@example.com",
        contactPhone: "+15234567890",
        bookingTime: "2024-12-30",
      },
      trip007: {
        title: "Wellness-Wochenende",
        price: "349 €",
        location: "Schwarzwald, Deutschland",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Entspannen Sie sich bei einem Wellness-Wochenende im idyllischen Schwarzwald.",
        author: { id: "author007", name: "Markus Weber" },
        contactEmail: "markus@example.com",
        contactPhone: "+497892345678",
        bookingTime: "2024-12-24",
      },
      trip008: {
        title: "Kreuzfahrt in der Karibik",
        price: "2.999 €",
        location: "Karibische Inseln",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Genießen Sie eine luxuriöse Kreuzfahrt durch die karibischen Inseln.",
        author: { id: "author008", name: "Anja Schneider" },
        contactEmail: "anja@example.com",
        contactPhone: "+15794567890",
        bookingTime: "2024-12-29",
      },
      trip009: {
        title: "Entdeckungsreise in Japan",
        price: "4.299 €",
        location: "Japan",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Erkunden Sie die faszinierende Kultur und Natur Japans auf dieser spannenden Reise.",
        author: { id: "author009", name: "Hans Zimmer" },
        contactEmail: "hans@example.com",
        contactPhone: "+819012345678",
        bookingTime: "2024-12-28",
      },
      trip010: {
        title: "Abenteuer in Australien",
        price: "3.899 €",
        location: "Australien",
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2" },
        ],
        description:
          "Erleben Sie das Abenteuer Ihres Lebens in Australien, von den roten Felsen bis zu den wunderschönen Stränden.",
        author: { id: "author010", name: "Julia Fischer" },
        contactEmail: "julia@example.com",
        contactPhone: "+61423456789",
        bookingTime: "2024-12-26",
      },
    };

export const bestJourneys = !reset
  ? JSON.parse(await githubFS.readFile("best-journeys.data"))
  : ["trip001", "trip002", "trip003", "trip004", "trip005", "trip006"];

export const users = !reset
  ? JSON.parse(await githubFS.readFile("users.data"))
  : {};

var isSaving = false;
const saveData = async () => {
  console.log("Saving data to Github...");
  if (isSaving) return;
  isSaving = true;
  try {
    await githubFS.writeFile("journeys.data", JSON.stringify(journeys));
    await githubFS.writeFile(
      "best-journeys.data",
      JSON.stringify(bestJourneys)
    );
    await githubFS.writeFile("users.data", JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
  isSaving = false;
  console.log("Data saved to GitHub");
};

setInterval(saveData, 1_000_000);
process.on("exit", saveData);
// saveData()