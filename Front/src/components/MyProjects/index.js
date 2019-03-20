/**
 * NPM IMPORT
 */
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Formatizer } from 'formatizer';

/**
 * Local import
 */
import './myprojects.scss';

/**
 * Code
 */
const MyProjects = () => (
  <div id="myprojects">
    <div id="myprojects-banner">
      <h1>Mes projets</h1>
    </div>
    <div id="project-card">
      <div className="ui link cards">
        <Card>
          <Image src="src/assets/images/new-york.jpg" />
          <Card.Content>
            <Card.Header>
              New-York
            </Card.Header>
            <Card.Meta>
              Date: 10/07/2019 au 25/07/2019
            </Card.Meta>
            <Card.Description>
              Voyage a New-York entre pote
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>Statut: terminé</span>
          </Card.Content>
        </Card>
        <Card>
          <Image src="src/assets/images/homepage_img_down.jpg" />
          <Card.Content>
            <Card.Header>
              San francisco
            </Card.Header>
            <Card.Meta>
              Date: 10/08/2019 au 25/09/2019
            </Card.Meta>
            <Card.Description>
              Voyage a San Francisco
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>Statut: Programmé</span>
          </Card.Content>
        </Card>
        <Card>
          <Image src="src/assets/images/sweden.jpg" />
          <Card.Content>
            <Card.Header>
              Stockholm
            </Card.Header>
            <Card.Meta>
              Date: 10/12/2019 au 20/12/2019
            </Card.Meta>
            <Card.Description>
              <Formatizer>
                la suede :hearts:
              </Formatizer>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>Statut: En cours</span>
          </Card.Content>
        </Card>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default MyProjects;
