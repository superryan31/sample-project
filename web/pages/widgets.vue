<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card class="text-white bg-primary">
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card class="text-white bg-warning">
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card class="text-white bg-danger">
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card class="text-white bg-info">
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col md="3" sm="6">
        <div class="social-box facebook">
          <i class="fa fa-facebook"></i>
          <ul>
            <li>
              <strong>89k</strong>
              <span>friends</span>
            </li>
            <li>
              <strong>459</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
      <b-col md="3" sm="6">
        <div class="social-box twitter">
          <i class="fa fa-twitter"></i>
          <ul>
            <li>
              <strong>973k</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>1.792</strong>
              <span>tweets</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
      <b-col md="3" sm="6">
        <div class="social-box linkedin">
          <i class="fa fa-linkedin"></i>
          <ul>
            <li>
              <strong>500+</strong>
              <span>contacts</span>
            </li>
            <li>
              <strong>292</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
      <b-col md="3" sm="6">
        <div class="social-box google-plus">
          <i class="fa fa-google-plus"></i>
          <ul>
            <li>
              <strong>894</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>92</strong>
              <span>circles</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </b-col>
    </b-row><!--/.row-->
    <b-card-group class="mb-4">
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-people"></i>
        </div>
        <div class="h4 mb-0">87.500</div>
        <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="info" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-user-follow"></i>
        </div>
        <div class="h4 mb-0">385</div>
        <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="success" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 mb-0">1238</div>
        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-pie-chart"></i>
        </div>
        <div class="h4 mb-0">28%</div>
        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 mb-0">5:34:11</div>
        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
        <b-progress height={} class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'widgets',
  data () {
    return {
      msg: 'Widgets'
    }
  }
}
</script>
