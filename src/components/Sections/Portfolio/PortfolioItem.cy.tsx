import React from 'react';
import { PortfolioItem } from './PortfolioItem';
import { gsap } from 'gsap'; // Import GSAP to stub its methods
// Assuming styles might be needed for correct rendering or if class selectors are used heavily.
// We might need to mock or ensure SCSS module processing is handled by Cypress.
// For now, let's include it, Cypress might have a preprocessor for it.
// If not, and tests fail due to style imports, this might need adjustment.
import styles from './portfolio.module.scss';


describe('<PortfolioItem />', () => {
  // Common setup for mocking GSAP before each test
  beforeEach(() => {
    // Stub gsap.fromTo to prevent animations from making elements invisible
    // This mock will make gsap.fromTo do nothing, so elements remain as they are rendered initially (visible)
    // or we can make it call the 'to' vars immediately if needed.
    // For autoAlpha, we want it to be 1.
    cy.stub(gsap, 'fromTo').callsFake((target, fromVars, toVars) => {
      // Immediately apply the 'to' state regarding autoAlpha or visibility.
      // This is a simplified mock. A more complex one might directly manipulate target styles.
      if (toVars.autoAlpha !== undefined) {
        gsap.set(target, { autoAlpha: 1 }); // Ensure element is visible
      }
      // Return a dummy timeline/animation object if needed by the component
      return gsap.timeline();
    });
  });

  const defaultProps = {
    image: '/assets/images/mock-image.png', // Using a path that might exist in public or be mocked
    title: 'Test Project Title',
    technologies: ['react', 'typescript', 'next'],
    children: <p>This is a test description for the portfolio item.</p>,
  };

  it('renders with a link and correct href when url is provided', () => {
    const testUrl = 'https://www.example.com';
    // Mount the component with a URL
    cy.mount(
      <PortfolioItem {...defaultProps} url={testUrl}>
        {defaultProps.children}
      </PortfolioItem>
    );

    // Check if an 'a' tag is present as a direct child of the .job div
    // and has the correct href attribute
    cy.get(`.${styles.job} > a`)
      .should('exist')
      .and('have.attr', 'href', testUrl);
  });

  it('renders without a link (using a div wrapper) when url is not provided', () => {
    // Mount the component without a URL
    cy.mount(
      <PortfolioItem {...defaultProps} url={undefined}>
        {defaultProps.children}
      </PortfolioItem>
    );

    // Check that the direct child of .job is a div (and not an 'a' tag)
    cy.get(`.${styles.job} > div`).should('exist');

    // Additionally, ensure no 'a' tag is the direct child of .job
    cy.get(`.${styles.job} > a`).should('not.exist');
  });

  // Optional: Test for content rendering to ensure PortfolioItemContent is working as expected
  it('renders all content correctly regardless of url presence', () => {
    cy.mount(
      <PortfolioItem {...defaultProps}>
        {defaultProps.children}
      </PortfolioItem>
    );
    // With GSAP stubbed, scrolling and waiting for animation might not be necessary,
    // but let's keep scrollIntoView if layout affects visibility unrelated to GSAP.
    // cy.get(`.${styles.job}`).scrollIntoView(); // May or may not be needed now
    // cy.wait(1200); // Should not be needed if GSAP is properly stubbed

    cy.contains(defaultProps.title).should('be.visible');
    cy.contains('This is a test description for the portfolio item.').should('be.visible');
    // Check if the src attribute contains the original image file name,
    // as Next/Image will change the full src path for optimization.
    cy.get(`.${styles.image} img`)
      .should('have.attr', 'src')
      .and('include', 'mock-image.png');
    cy.get(`.${styles.image} img`).should('have.attr', 'alt', defaultProps.title);
    // Check for technology icons if they are uniquely identifiable
    // For example, if they have alt text or specific class names within the SVG structure
    defaultProps.technologies.forEach(tech => {
      // This is a placeholder selector; actual selector might depend on how SVGs are rendered
      // For example, if SVGs have a title or specific class related to the tech name
      cy.get(`.${styles.detail} ul li svg`).should('exist'); // General check for SVGs
    });
  });
});
