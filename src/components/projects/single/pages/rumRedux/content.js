const tech = [
 'firebase authentication/'
  { caption: 'exploits remote services to runs as static site' },
  { caption: 'provides foolproof updates with zero intermediate state' },
];

const strategy = {
  caption: 'calculates possible plays',
  content: `### calculates possible plays
[strategy]: /images/apps/rummy-redux/strategy.png
<div class='images'>
    ![strategy][strategy]
</div>

`,
};

const draw = {
  caption: 'updates UI based on players options',
  content: `### updates UI based on players options 
  [active]: /images/apps/rummy-redux/drawActive.png
  [inactive]: /images/apps/rummy-redux/drawInactive.png
  ### Active Player draw options
  <div class='images'>
      ![active][active]
  </div>

  ### Inactive Player draw options
  <div class='images'>
  ![inactive][inactive]
  </div>


<div class='images'>
</div>

`,
};
const multi = {
  caption: 'multi-client multi-player mode',
  content: `### multi-client multi-player mode
  [player1]: /images/apps/rummy-redux/player1.png
  [player2]: /images/apps/rummy-redux/player2.png
  
<div class='images'>
  ![player1][player1]
  ![player2][player2]
</div>

`,
};

export const slides = [ strategy, draw, multi ];
