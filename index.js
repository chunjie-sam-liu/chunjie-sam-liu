const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\

<p align="center">
  <a
    href="https://github.com/chunjie-sam-liu"
    style="text-decoration: none;"
    >
    <img
      src="https://img.shields.io/github/followers/chunjie-sam-liu.svg?label=GitHub&style=social" alt="GitHub"
      height="30"
      style="border: none;"
      >
  </a>
  &nbsp;&nbsp;
  <a
    href="https://twitter.com/chunjie_sam_liu"
    style="text-decoration: none;"
    >
    <img
      src="https://img.shields.io/twitter/follow/chunjie_sam_liu?label=Twitter&style=social" alt="Twitter"
      height="30"
      style="border: none;"
      >
  </a>
  &nbsp;&nbsp;
  <a
    href="https://scholar.google.com/citations?user=IBIJfSwAAAAJ&hl=en"
    style="text-decoration: none;"
    >
    <img
      src="https://scholar.google.com/intl/en/scholar/images/1x/scholar_logo_64dp.png"
      alt="Google Scholar"
      width="200"
      height="30"
      style="border: none;"
    >
  </a>
  &nbsp;&nbsp;
  <a
      class="underline"
      href="https://orcid.org/0000-0002-3008-3375"
      target="orcid.widget"
      rel="me noopener noreferrer"
      style="vertical-align: top; text-decoration: none;"
      >
    <img
      src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
      alt="ORCID iD icon"
      height="30"
      style="border: none;"
    />
  </a>
</p>

<p align="center">
  <a href="https://github.com/chunjie-sam-liu">
    <img
      src="https://github-readme-stats.vercel.app/api?username=chunjie-sam-liu&show_icons=true"
      alt="Stat"
      style="border: none;"
    >
  </a>
</p>

<p align="center">
  <span>
    ⏳ Year ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
  </span>
</p>

<p align="center">
  <span>
    ⏰ on ${new Date().toUTCString()}
  </span>
</p>

<p align="center">
  <span>
    <a href="https://github.com/chunjie-sam-liu/chunjie-sam-liu/actions/workflows/main.yml/badge.svg">
      <img src="https://github.com/chunjie-sam-liu/chunjie-sam-liu/actions/workflows/main.yml/badge.svg" alt="GitHub Actions CI">
    </a>
</p>

\
`

console.log(readme)