/* your code in typescript */
import Graphic from 'graphic-ts-project/graphic'
import Classes from 'graphic-ts-project/classes'

Graphic.setRoot('root')

const tagDivContainer = Graphic.createDiv(Graphic.createHTMLObject('container-fluid'))
Graphic.addTagToRoot(tagDivContainer)
const tagDivRow = Graphic.createDiv(Graphic.createHTMLObject(Classes.set(['row','justify-content-center'])))
Graphic.addTagToParent(tagDivContainer, tagDivRow)
const tagDivCol = Graphic.createDiv(Graphic.createHTMLObject(Classes.set(['col-2'])))
Graphic.addTagToParent(tagDivRow, tagDivCol)
const tagP1 = Graphic.createParagraph('Crea la tua app',Graphic.createHTMLObject(Classes.set(['myBold','text-center'])))
const tagP2 = Graphic.createParagraph('Inserisci qui il tuo codice',Graphic.createHTMLObject(Classes.set(['text-align-center'])))
Graphic.addTagsToParent(tagDivCol, [tagP1, tagP2])

console.log(tagP1, tagDivContainer)
console.log(Graphic.getRoot())