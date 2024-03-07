// import * as wmill from "windmill-client"

export async function main(team: object) {
  const teamAttr = {
    name: team.name,
    avatar: team.avatar,
    createdAt: team.createdAt,
    updatedAt: team.updatedAt
  }
  const projects = team.projects.edges.map(({ node }) => ({
    id: node.id,
    name: node.name,
    createdAt: node.createdAt,
    updatedAt: node.updatedAt
  }))
  const deployments = team.projects.edges.map(({ node }) => (
    node.deployments.edges.map(n => ({...n}))
  ))
  return {
    teamAttr,
    projects,
    deployments
  }
}
