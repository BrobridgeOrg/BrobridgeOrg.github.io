/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
    docSidebar: [
    'why-gravity',
    'core-concepts',
    'quickstart',
    {
      type: 'category',
      label: 'Installation Guide',
      items: [
        'install_guide/requirements',
        'install_guide/env',
        'install_guide/install_k8',
        'install_guide/deployment',
        'install_guide/atomic_guide',
      ],
    },
    {
      type: 'category',
      label: 'Configurations',
      items: [
          {
              type: 'category',
              label: 'Adapter Configurations',
              items:[
                  'config/adapter-config/psql',
                  'config/adapter-config/mssql',
                  'config/adapter-config/oracle',
                  'config/adapter-config/mysql',
                  'config/adapter-config/mongodb',
                  'config/adapter-config/informix',
                  'config/adapter-config/ogg',
              ],
          },
          'config/dispatcher-config',
          'config/atomic_modules',
          'config/ldap',
      ],
    },
    {
      type: 'category',
      label: 'Atomic',
      items: [
          'atomic/atomic_guide',
          'atomic/atomic-batch-feature',
      ],
    },
    'cli',
    ],
    apiSidebar: [
        'api/general',
        {
          type: 'category',
          label: 'Gravity-SDK',
          items: [
            'api/sdk/overview',
          ],
        },
        'api/graviton',

    ],
    faqSidebar: [
        'faq/general',
        'faq/gravity-cli',
        'faq/gravity-portal',
        'faq/troubleshooting',
    ]





  // You can create another sidebar manually if needed
    //
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
};

export default sidebars;

