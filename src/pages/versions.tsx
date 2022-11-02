import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  useVersions,
  useLatestVersion,
} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const docsPluginId = undefined; // Default docs plugin instance

function DocumentationLabel() {
  return (
    <Translate id="versionsPage.versionEntry.link">Documentation</Translate>
  );
}

function ReleaseNotesLabel() {
  return (
    <Translate id="versionsPage.versionEntry.releaseNotes">
      Release Notes
    </Translate>
  );
}

export default function Version(): JSX.Element {
  const {
    siteConfig: {organizationName, projectName},
  } = useDocusaurusContext();
  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);
  const currentVersion = versions.find(
    (version) => version.name === 'current',
  )!;
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== 'current',
  );
  const repoUrl = `https://github.com/${organizationName!}/${projectName!}`;

  return (
    <Layout
      title="Versions"
      description="Illusive Soulworks Versions page listing all documented site versions">
      <main className="container margin-vert--lg">
        <Heading as="h1">
          <Translate id="versionsPage.title">
            Illusive Soulworks project documentation versions
          </Translate>
        </Heading>

        <div className="margin-bottom--lg">
          <Heading as="h3" id="next">
            <Translate id="versionsPage.current.title">
              Current version
            </Translate>
          </Heading>
          <p>
            <Translate id="versionsPage.current.description">
              Here you can find the documentation for the latest version.
            </Translate>
          </p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion.label}</th>
                <td>
                  <Link to={latestVersion.path}>
                    <DocumentationLabel />
                  </Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/v${latestVersion.name}`}>
                    <ReleaseNotesLabel />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {(pastVersions.length > 0) && (
          <div className="margin-bottom--lg">
            <Heading as="h3" id="archive">
              <Translate id="versionsPage.archived.title">
                Past versions
              </Translate>
            </Heading>
            <p>
              <Translate id="versionsPage.archived.description">
                Here you can find documentation for previous versions of
                Illusive Soulworks projects.
              </Translate>
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <Link to={version.path}>
                        <DocumentationLabel />
                      </Link>
                    </td>
                    <td>
                      <Link href={`${repoUrl}/releases/tag/v${version.name}`}>
                        <ReleaseNotesLabel />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}