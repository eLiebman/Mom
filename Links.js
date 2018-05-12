const $episodeLinks = $('.episodeList');
const $content = $('#content');
const $seasonOne = $('#seasonOne');
const $seasonTwo = $('#seasonTwo');

const links = [
  'WlEkF1cZZbQ',
  'Zp9ggdE3WiQ',
  'eao-st-dHF0',
  'GRpPiqqUEkQ',
  'xU_1fojcBJ8',
  '4SqRTJzmy0k',
  'D7OCiE3U0tU',
  'OnHyBENRwoU',
  'x6uRwz-Z7ro',
  '4uYPmBQAaO8',
  'D9xLlxeR270',
  'bCeUYuccSLA',
  'hRnTBaiSfWE',
  'ej-fgdMQEM8',
  '2_6tGCDgynk',
  '_Jtwq1x6Loc',
  'Nqm24o9ZuJw',
  '-fYGEagY4uc',
  'WZaHYzj_Q7g',
  'aZYIwHpefn4',
  'H3KCJxbgEF4',
  'rSf0jEQWLhk',
  '0AjWfCqzu3E',
  'HhSIX6Rt2TU',
  'aA4qmGrL_ZA',
  'gHl8t-EMaFY',
  '3kzXI-ZiSYk',
  '8m9yZ1IaomA',
  'dZLfIG0uJSs',
  'khi7lnBxePk',
  '0PikacO4d1w',
  'cVMaQLevqSM',
  'HQO1f7dR6KQ',
  'h6ol8ZhGSpE',
  'bUt2Ltx_0qE',
  'JxxUDHNlbaM',
  '00XeJUmfBrA',
  'cZrKgwK9dHs',
  'gJlPc401rFM',
  'g0wWk0dXys0',
  'E_wWOXURsk0',
  'IVswblawFUs',
  'bNUuZRMzS-0',
  'C0jqG__wge4',
  'zS1ULSqKARs',
  '0AjWfCqzu3E'
];

const episodes = [];
let episodeCode;

if (localStorage.episodeCode) {
  episodeCode = localStorage.episodeCode;
  loadNewVideo(episodeCode);
} else {
  episodeCode = 'WlEkF1cZZbQ';
  localStorage.episodeCode = episodeCode;
  loadNewVideo(episodeCode);
}

function loadNewVideo(episodeCode){
  newiFrame = `<iframe id = "video" width="560" height="315" src="https://www.youtube.com/embed/${episodeCode}?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
  $('#content iframe').remove();
  $('#content').append(newiFrame);
};

// Create an object for each episode using links
// Populate Episodes array
for (i=0; i< links.length; i++){
  if (i <= 22){
    episodes.push(
      {season: 1, episode: i+1, link: links[i]}
    );
  } else {
    episodes.push(
      {season: 2, episode: i-22, link: links[i]}
    );
  }
}

// Make a button for each episode
for (i=0; i<episodes.length; i++){
  const season = episodes[i].season;
  const episode = episodes[i].episode;
  const link = episodes[i].link;
  const button = `<button value="${link}" class="butt btn btn-secondary">Episode ${episode}</button>`;
  if (season === 1) {
    $seasonOne.append(button);
  } else {
    $seasonTwo.append(button);
  }
}

// When episode list receives a click
$('.episodeList').on('click', function(e){
  //check that it's a new episode
  if (episodeCode === e.target.value){
    return;
  } else{
    // load new video
    episodeCode = e.target.value;
    localStorage.episodeCode = episodeCode;
    loadNewVideo(episodeCode);
    $('.btn-primary')
        .addClass('btn-secondary')
        .removeClass('btn-primary');
    e.target.removeClass('btn-secondary');
    e.target.addClass('btn-primary');
  }
});
