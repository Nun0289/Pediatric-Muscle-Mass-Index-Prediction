import pdfMake from "pdfmake/build/pdfmake"; 
import pdfFonts from "pdfmake/build/vfs_fonts"; 
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew-Bold.ttf',
    italics: 'THSarabunNew-Italic.ttf',
    bolditalics: 'THSarabunNew-BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
}

export const doc = {
    content: [
        {
        text: 'HEADER',
        style: 'header',
        alignment: 'center'
      },
  // 		absolutePosition: {x: 45, y: 50}
      {
          absolutePosition: {x: 65, y: 110},
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 200,
            h: 150,
            r: 5,
            lineColor: '#C1C1C1',
            color: '#EAEAEA'
          },
        ]
        },
        {
            absolutePosition: {x: 330, y: 110},
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 200,
            h: 150,
            r: 5,
            lineColor: '#C1C1C1',
            color: '#EAEAEA'
          },
        ]
        },
        {
        text: 'HEADER',
        style: 'header',
        alignment: 'left',
        absolutePosition: {x: 133, y: 130}
      },
      {
        text: 'MMI',
        style: 'header',
        alignment: 'left',
        color: 'orange',
        absolutePosition: {x: 78, y: 130}
      },
      {
        text: '17:30',
        style: 'header',
        alignment: 'center',
        color: 'orange',
        absolutePosition: {x: -228, y: 170}
      },
      {
        text: 'strange',
        fontSize: 18,
        alignment: 'justify',
        alignment: 'center',
        color: 'red',
        absolutePosition: {x: -223, y: 210}
      },
      {
        text: 'MMI',
        style: 'header',
        alignment: 'left',
        color: 'orange',
        absolutePosition: {x: 343, y: 130}
      },
      {
        text: '17:30',
        style: 'header',
        alignment: 'center',
        color: 'orange',
        absolutePosition: {x: 303, y: 170}
      },
      {
        text: 'strange',
        fontSize: 18,
        alignment: 'justify',
        alignment: 'center',
        color: 'red',
        absolutePosition: {x: 308, y: 210}
      },
      {
          absolutePosition: {x: 40, y: 350},
        layout: 'noBorders', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [ '50%', '50%'],
          style: 'bodys',
          body: [
                  [ 
                      {
                          style: 'bodys',
                  border: [true, true, true, false],
                  text: 'left'
                  },
                  {
                      style: 'bodys',
                  border: [true, true, true, false],
                  text: 'right'
                } 
              ],
                  [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'เพศ :'
                } 
              ],
              
                  [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'อายุ :'
                } 
              ],
              
                  [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'น้ำหนัก :'
                } 
              ],
              
                  [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: 'head'
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'ส่วนสูง :'
                } 
              ],
              
                  [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              
                  [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว :'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, false],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, false],
                  text: 'border:\n[false, true, false, false]'
                } 
              ],
              [ 
                      {
                          style: 'bodys',
                  border: [true, false, true, true],
                  text: ''
                  },
                  {
                      style: 'bodys',
                  border: [true, false, true, true],
                  text: 'border:[false, true, false, false]'
                } 
              ]
              ]
        },
        layout: {
          hLineWidth: function (i, node) {
            return (i === 0 || i === node.table.body.length) ? 0.5 : 1;
          },
          vLineWidth: function (i, node) {
            return (i === 0 || i === node.table.widths.length) ? 0.5 : 1;
          },
          hLineColor: function (i, node) {
            return (i === 0 || i === node.table.body.length) ? 'gray' : 'red';
          },
          vLineColor: function (i, node) {
            return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
          },
          // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
          // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
          paddingLeft: function(i, node) { return 5; },
          paddingRight: function(i, node) { return 4; },
          paddingTop: function(i, node) { return 3; },
          paddingBottom: function(i, node) { return 3; },
          // fillColor: function (rowIndex, node, columnIndex) { return null; }
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'justify'
      },
      bodys: {
          fontSize: 10,
          font: 'THSarabunNew'
      },
      box: {
      }
    },
    defaultStyle: {
      font:'THSarabunNew'
    }
}
