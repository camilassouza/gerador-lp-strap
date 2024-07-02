import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuLinks extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'links';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'menu.menu-links', true> & Attribute.Required;
    menu: Attribute.Component<'menu.menu-links', true>;
  };
}

export interface MenuMenuLinks extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    description: '';
  };
  attributes: {
    link_text: Attribute.String;
    url: Attribute.Text;
    open_new_tab: Attribute.Boolean;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'filter';
    description: '';
  };
  attributes: {
    logo_text: Attribute.Text & Attribute.Required;
    logo: Attribute.Media<'images'>;
    menu_links: Attribute.Component<'menu.menu-links', true>;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    title: Attribute.String;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true> &
      Attribute.Required;
    image_grid: Attribute.Component<'section.image-grid', true>;
    metadata: Attribute.Component<'section.section-metadata', true>;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'cube';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    section_id: Attribute.String & Attribute.Required;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionTwoColomns extends Schema.Component {
  collectionName: 'components_section_section_two_colomns';
  info: {
    displayName: 'section_two_colomns';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.links': MenuLinks;
      'menu.menu-links': MenuMenuLinks;
      'menu.menu': MenuMenu;
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-colomns': SectionSectionTwoColomns;
      'section.text-grid': SectionTextGrid;
    }
  }
}
