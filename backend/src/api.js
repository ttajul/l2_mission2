const vision = require('@google-cloud/vision');
const client = new vision.ProductSearchClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const projectId = 'eternal-tempest-416204';
// const location = 'A compute region name';

// A resource that represents Google Cloud Platform location.
const locationPath = client.locationPath(projectId, location);

async function createProductSet() {
  const [productSet] = await client.createProductSet({
    parent: locationPath,
    productSetId: 'product_set_display_name',
    productSet: {
      displayName: 'Product set display name',
    },
  });

  console.log(`Product set name: ${productSet.name}`);
}
createProductSet();  