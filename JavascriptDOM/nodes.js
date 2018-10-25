//Node Types
//https://www.w3schools.com/Jsref/prop_node_nodetype.asp
const banner = document.querySelector('#page-banner');

//checking node type
console.log('#page-banner node type is:', banner.nodeType);

//output node name
console.log('#page-banner name is:', banner.nodeName);

//checking if node has child nodes
console.log('#page-banner has child nodes:', banner.hasChildNodes());

//copying node, if is set to true also copy node inner html
const clonedBanner = banner.cloneNode(true);
const clonedBanner2 = banner.cloneNode(false);
console.log(clonedBanner);
console.log(clonedBanner2);