import Introduction from '../components/Introduction.jsx';

const formConfig = {
  title: 'Form',
  subTitle: 'Test',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: 'First Chapter',
      pages: {
        firstPage: {
          path: 'first-chapter/first-page',
          title: 'First Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {
              street: {
                type: 'string'
              },
              city: {
                type: 'string'
              }
            }
          },
          uiSchema: {
            street: {
              'ui:title': 'Street'
            },
            city: {
              'ui:title': 'City'
            }
          }
        },
        secondPage: {
          path: 'first-chapter/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    secondChapter: {
      title: 'Second Chapter',
      pages: {

      }
    }
  }
};

export default formConfig;
