// Write your code here!
const main1 = document.querySelector('main');
main1.remove();

const newHeader = document.createElement('h1');
document.body.append(newHeader);
newHeader.nodeName = 'H1';

newHeader.id = 'victory';

newHeader.innerHTML = "Ryan is the champion";
